import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import Config from 'react-native-config'
import Text from '../atoms/Text';
import SearchBar from '../molecules/SearchBar';
import ErrorPanel from '../molecules/ErrorPanel';
import Loading from '../molecules/Loading';
import { Post } from '../../types';
import Message from '../organisms/Message';

export default () => {

    const [
        feed,
        setFeed
    ] = useState<Array<Post> | null>(null);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<Array<Post> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchFeed = async (searchTerm?: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${Config.API_URL}/feed${searchTerm ? `?q=${searchTerm}` : ''}`);
            setFeed(await response.json());
        }
        catch (ex) {
            setError("Messages can't be retrieved");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchFeed();
    }, []);

    const onSearch = (search: string) => {
        setSearchTerm(search);
    }

    useEffect(() => {
        if (searchTerm) {
            setSearchResults(feed?.filter(f => f.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
        } else {
            setSearchResults(undefined);
        }
    }, [searchTerm]);

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text size='xl' color='black'>Messages</Text>
            </View>
            <View style={styles.searchContainer}>
                <SearchBar onSearch={onSearch} />
            </View>
            <View>
                {error ? <ErrorPanel text={error} /> : loading ? <Loading /> :
                    <View>
                        <FlatList
                            data={searchResults || feed}
                            renderItem={({ item }) => <Message post={item} />}
                            keyExtractor={item => item.postId.toString()}
                        /></View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10
    },
    searchContainer: {
        marginVertical: 5
    },
});
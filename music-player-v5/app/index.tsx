import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import styles from './indexStyle';
import Ellipsis from '@/assets/icons/Ellipsis';
import data from '../assets/data/library.json';
import Play from '@/assets/icons/Play';
import Stop from '@/assets/icons/Stop';
import Forward from '@/assets/icons/Forward';

const index = () => {
    const [trackHide, setTrackHide] = useState(false);
    const [trackSelected, setTrackSelected] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const startPlayer = async () => {
            await TrackPlayer.setupPlayer();
        };

        startPlayer();

        return () => {
            TrackPlayer.destroy();
        };
    }, []);

    const toggleButton = async (item) => {
        if (trackSelected?.url === item.url && isPlaying) {
            // Pause if the same track is clicked again
            await TrackPlayer.pause();
            setIsPlaying(false);
        } else {
            if (trackSelected?.url !== item.url) {
                // Load and play new track
                await TrackPlayer.reset();
                await TrackPlayer.add({
                    id: item.url,
                    url: item.url,
                    title: item.title,
                    artist: item.artist,
                    artwork: item.artwork,
                });
            }

            await TrackPlayer.play();
            setIsPlaying(true);
            setTrackSelected(item);
            setTrackHide(true);
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Songs</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => toggleButton(item)}>
                            <Track label={item.title} name={item.artist} source={{ uri: item.artwork }} />
                        </Pressable>
                    )}
                />
            </ScrollView>

            {trackHide && trackSelected && (
                <View style={styles.trackPopup}>
                    <TrackPopup source={{ uri: trackSelected.artwork }} label={trackSelected.title} />
                </View>
            )}
        </View>
    );
};

const Track = ({ source, label, name }) => {
    return (
        <View style={styles.track}>
            <Image source={source} style={styles.logo} />
            <View style={styles.texts}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Ellipsis />
        </View>
    );
};

const TrackPopup = ({ source, label }) => {
    const togglePlayStop = async () => {
        const state = await TrackPlayer.getState();
        
        if (state === TrackPlayer.STATE_PLAYING) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    return (
        <View style={styles.track}>
            <Image source={source} style={styles.logo} />
            <View style={styles.texts}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.playFlex}>
                <Pressable onPress={togglePlayStop}>
                    <Play />
                </Pressable>
                <Forward />
            </View>
        </View>
    );
};

export default index;

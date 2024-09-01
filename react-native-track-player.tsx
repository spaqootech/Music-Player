import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import className from 'twrnc';
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
            // Reset player to clean up resources
            TrackPlayer.reset();
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
        <View style={className`flex-1 p-5 gap-5 bg-black`}>
            <Text style={className`text-3xl font-semibold text-white`}>Songs</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.url}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => toggleButton(item)}>
                            <Track label={item.title} name={item.artist} source={{ uri: item.artwork }} />
                        </Pressable>
                    )}
                />
            </ScrollView>

            {trackHide && trackSelected && (
                <View style={className`flex-row justify-between items-center gap-3 mt-2`}>
                    <TrackPopup source={{ uri: trackSelected.artwork }} label={trackSelected.title} />
                </View>
            )}
        </View>
    );
};

const Track = ({ source, label, name }) => {
    return (
        <View style={className`flex-row justify-between items-center gap-3 mt-2`}>
            <Image source={source} style={className`h-10 w-10 rounded-lg border border-gray-300`} />
            <View style={className`flex-1`}>
                <Text style={className`text-lg font-semibold text-white`}>{label}</Text>
                <Text style={className`text-md text-gray-300`}>{name}</Text>
            </View>
            <Ellipsis />
        </View>
    );
};

const TrackPopup = ({ source, label }) => {
    const [playStop, setPlayStop] = useState(false);

    const togglePlayStop = async () => {
        const state = await TrackPlayer.getState();
        if (state === TrackPlayer.STATE_PLAYING) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
        setPlayStop(!playStop);
    };

    return (
        <View style={className`flex-row justify-between items-center gap-3 mt-2`}>
            <Image source={source} style={className`h-10 w-10 rounded-lg border border-gray-300`} />
            <View style={className`flex-1`}>
                <Text style={className`text-lg font-semibold text-white`}>{label}</Text>
            </View>
            <View style={className`flex-row gap-5 pr-3 items-center`}>
                <Pressable onPress={togglePlayStop}>
                    {playStop ? <Play /> : <Stop />}
                </Pressable>
                <Forward />
            </View>
        </View>
    );
};

export default index;

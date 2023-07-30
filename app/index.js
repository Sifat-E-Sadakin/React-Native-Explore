import { Stack, useRouter } from "expo-router";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

import {ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs} from "../components";

const index = () => {

    let router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
            <Stack.Screen options={{
                headerStyle:
                    { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: ()=> (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" ></ScreenHeaderBtn>
                ),
                headerRight: ()=> (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" ></ScreenHeaderBtn>
                ),
                headerTitle: ""
            }} >


            </Stack.Screen>

            <ScrollView>
                <View style={{flex: 1, padding: SIZES.medium}}>
                   <Welcome></Welcome>
                   <Popularjobs></Popularjobs>
                   <Nearbyjobs></Nearbyjobs>
                </View>
            </ScrollView>


        </SafeAreaView>
    );
};

export default index;
import DeveloperScreen from "../Screens/DeveloperScreen";
import HomeScreen from "../Screens/HomeScreen";

export const SampleData = {
    pages: [
        {
            path: '/',
            title: 'Reprosetry',
            component: <HomeScreen />,
            subtitle: 'see what the Github community is most excitd about today'
        },
        {
            path: '/developers',
            title: 'Developers',
            component: <DeveloperScreen />,
            subtitle: 'these are developers building the hot topics today'
        },

    ],
    filter: [
        {
            label: "Spoken Languages",
            hideIn: '/developers',
            data: [
                {
                    text: 'English',
                    value: 'en'
                },
                {
                    text: 'Arabic',
                    value: 'ar'
                },
                {
                    text: 'Frensh',
                    value: 'fr'
                },
            ]
        },
        {
            label: 'Language',
            data: [
                {
                    text: 'English',
                    value: 'en'
                },
                {
                    text: 'Arabic',
                    value: 'ar'
                },
                {
                    text: 'Frensh',
                    value: 'fr'
                },
            ]
        },
        {
            label: 'Data Range',
            data: [
                {
                    text: 'today',
                    value: '1'
                },
                {
                    text: 'week',
                    value: '7'
                },
                {
                    text: '2 week',
                    value: '14'
                },
                {
                    text: 'month',
                    value: '30'
                },
            ]
        },
    ],
    developerList: [
        {
            name: 'Carlos Alexander',
            avatar: 'user-avatar.png',
            title: 'Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien suscipit, fringilla nulla eget, porta metus',
        },
        {
            name: 'Carlos Alexander',
            avatar: 'user-avatar.png',
            title: 'Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien suscipit, fringilla nulla eget, porta metus',
        },
        {
            name: 'Carlos Alexander',
            avatar: 'user-avatar.png',
            title: 'Developer',
            description: 'Lorem ipsum dolor sit amet.',
        },
        {
            name: 'Carlos Alexander',
            avatar: 'user-avatar.png',
            title: 'Developer',
            description: 'consectetur adipiscing elit. Sed at sapien suscipit, fringilla nulla eget, porta metus',
        },
        {
            name: 'Carlos Alexander',
            avatar: 'user-avatar.png',
            title: 'Developer',
            description: 'Sed at sapien suscipit, fringilla nulla eget, porta metus',
        },
    ]
}
<template>
    <Qalendar :selected-date="new Date(2022, 0, 8)" :events="events" :config="config" />
</template>

<script lang="ts">
import { Qalendar } from "qalendar";

export default {
    components: {
        Qalendar,
    },

    data() {
        return {
            events: [
                {
                    title: "Сдано",
                    with: "Системное программирование",
                    time: { start: "2022-01-01 04:52", end: "2022-01-01 05:37" },
                    color: "green",
                    isEditable: true,
                    id: "de471c78cb5c",
                    description:
                        "Все сделанно в наилучшем виде.",
                },
                {
                    title: "Задолжность",
                    with: "Защита баз данных",
                    time: { start: "2022-01-02 20:05", end: "2022-01-02 21:35" },
                    colorScheme: "sports",
                    isEditable: true,
                    id: "6d3c0980a5cf",
                    description:
                        "Вы не правильно сделали бд в Acsess.",
                },
                {
                    title: "Задание требующие внимание",
                    with: "Физ-ра",
                    time: { start: "2022-01-02 22:10", end: "2022-01-02 22:55" },
                    colorScheme: "meetings",
                    isEditable: true,
                    id: "9f1b209982f1",
                    description:
                        "Zoom.",
                    location: "Tiraspol",
                },
                // ... and more
            ],

            config: {
                locale: "Ru",
                defaultMode: "month",
                style: {
                    colorSchemes: {
                        meetings: {
                            color: "#fff",
                            backgroundColor: "#131313",
                        },
                        sports: {
                            color: "#fff",
                            backgroundColor: "#ff4081",
                        },
                    },
                },
            },
        };
    },
};
</script>

<style>
@import "qalendar/dist/style.css";
</style>


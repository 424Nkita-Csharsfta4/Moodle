<!-----<template>
    <div class="flex">
        <button class="btn-primary" @click="reset">Today</button>
        <button class="btn" @click="shiftMonth(-1)">Previous</button>
        <button class="btn" @click="shiftMonth(1)">Next</button>
        <span class="text-3xl">{{ viewDate.format('MMMM YYYY') }}</span>
    </div>
    <div class="grid grid-cols-7 gap-1">
        <div v-for="d in weekDays" class="text-center">
            <div>{{ d }}</div>
        </div>
    </div>
    <div class="grid grid-cols-7">
        <div v-for="p in daystoPrepend"></div>
        <div class="border border-slate-200 flex flex-col h-32" v-for="d in units">
            <div :class="[d.isToday ? 'bg-red-300' : '']" class="text-center">{{ d.format('D') }}</div>
        </div>
    </div>
</template>-->
<script lang="ts">
/*
import dayjs from 'dayjs';
import 'dayjs/plugin/isToday';

const viewDate = dayjs();

const daystoPrepend = [];

const units = dayjs()
    .startOf('month')
    .subtract(1, 'day')
    .endOf('month')
    .add(1, 'day')
    .diff(viewDate.startOf('month').subtract(1, 'day'), 'day')
    .map(() => {
        viewDate.add(1, 'day');
        return viewDate;
    });

const shiftMonth = (amount :any) => {
    viewDate.add(amount, 'month');
};

const reset = () => {
    viewDate = dayjs();
};

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export default {
    data() {
        return {
            viewDate,
            daystoPrepend,
            units,
            weekDays,
        };
    },
    methods: {
        shiftMonth,
        reset,
    },
};*/
</script>



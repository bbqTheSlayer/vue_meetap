import { reactive } from 'vue'

import {Audio} from "@/components/audio";

import "./index.css"
import {Card} from "@/components/card";

export interface IMusic {
    name: string
    src: string
    img: string
    label: string
    color1: string
    color2: string
}

const store = reactive({
    doOnce: true,
    list: [] as IMusic[],
    hide: false,
    item: {} as IMusic,
    hidePlayer: true,
})

export const AudioPage = () => {
    const state = store

    fetch('/music.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((res) => {
            state.list = res
        })
        .then(() => state.doOnce = false)


    return (
        <>
            <div class="container">
                <Card state={state}/>
            </div>
            <Audio state={state}/>
        </>

    )
}
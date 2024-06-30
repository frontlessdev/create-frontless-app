import { Component, Widget } from "frontlessjs";
import { text, center } from "frontlessjs/material"

export default Component(async function header(): Promise<Widget> {
    return center(text('Header file: /components/header.ts'))
})
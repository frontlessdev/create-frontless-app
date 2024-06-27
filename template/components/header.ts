import { Component } from "@frontless/js";
import { text, center } from "@frontless/js/material"

export default Component(function header() {
    return center(text('Header file: /components/header.ts'))
})
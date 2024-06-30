import { center, row, column, text, link, textButton } from "frontlessjs/material"
import counter from "@/components/counter"
import { Widget } from "frontlessjs"

export default async (): Promise<Widget> => {
    return center(
        column([
            row([
                text('Page file:'),
                text('/pages/index.ts'),
            ]),
            await counter(),
            link('https://www.frontless.dev',
                textButton('Learn more about Frontless', { iconName: "link" })
            )
        ], { crossAxis: "center", gap: 10 })

    )
}

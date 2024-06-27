import { center, row, icon, column, text } from "@frontless/js/material"

export default () => {
    return center(
        row([
            icon("hand-waving", { size: "2x" }),
            column([
                text('Hello!', { size: 25 }),
                text('/pages/index.ts')
            ])
        ])
    )
}

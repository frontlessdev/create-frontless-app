import { Component, useAction } from "frontlessjs"
import { iconButton, row, text } from "frontlessjs/material"

// This number will be reset after server restarting. For persistence please use a Database like SQLite, MySQL, PostgreSQL.
let num = 0
export default Component(async function counter() {
      const action = useAction()
      if (action == 'inc') {
            num++
      } else if (action == 'dec') {
            num--
      }
      return row([
            iconButton("arrow-down", { action: 'dec', inverColor: true, colorSchema: "red" }),
            text(num, { size: 25 }),
            iconButton("arrow-up", { action: 'inc', inverColor: true, colorSchema: "green" })
      ], { gap: 5 })
})

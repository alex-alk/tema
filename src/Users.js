import { createComponent } from "../js_modules/main.js"
//import { Table } from "./Table.js"
import { store } from '../js_modules/store.js'

export class Users {

    async getElement() {
        const html = /* html */`
            <div class="card">
                <div class="font-semibold text-xl mb-4">Utilizatori</div>
                <users-table></users-table>
            </div>
            `
        const component = createComponent(html)

        const $table = component.querySelector('users-table')

        const module = await import("./Table.js")
        const { Table } = module

        const table = new Table()
        $table.replaceWith(table.getElement())
        table.columns = ['Prenumex', 'Numex'];

        if ('users' in store) {
            table.data = store.users
        } else {
            const data = [
                {
                    'nume': 'Nume',
                    'prenume': 'Prenume'
                }
            ]

            table.data = data
            store.users = data
        }
        
        return component
    }
}
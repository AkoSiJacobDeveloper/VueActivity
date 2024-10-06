<template>
    <section class="main-container text-white">
        <div class="container d-flex justify-content-center align-items-center">
            <table>
                <thead>
                    <tr>
                        <th>Project Owner</th>
                        <th>Project Name</th>
                        <th>Technology</th>
                        <th>Framework</th>
                        <th>Status</th>
                        <th>Navigate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paul Jacob Tocmo</td>
                        <td>Todo-List</td>
                        <td>HTML/SCSS/Javascript/Bootstrap5</td>
                        <td>Vue.js</td>
                        <td>Finish</td>
                        <td><a href="http://localhost:5174/" class="text-white">
                            <button class="w-100 py-2 px-4 rounded-1 fw-bold">Visit</button>
                        </a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.main-container {
    font-size: 1.5em;
    div {
        table {
            width: 100%;
            border-collapse: collapse; 
            
            th, td {
                border: 1px solid #eee;
                padding: 10px;
                text-align: left;

                button {
                    background-color: #0dcaf0;
                }
            }
            th {
                background-color: #002233; /* Optional: Change background color for headers */
            }
            tr:nth-child(even) {
                background-color: rgba(255, 255, 255, 0.1); /* Optional: Zebra stripe effect */
            }
        }
    }
}
</style>

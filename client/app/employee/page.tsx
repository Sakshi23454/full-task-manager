"use client"
import { useGetTodosQuery, useUpdateTodoMutation } from '@/redux/apis/employee.api'
import { TOGGLE_TODO_REQUEST } from '@/types/Employee'
import { toast } from 'react-toastify'
import { format, isBefore } from "date-fns"
import clsx from 'clsx'

const EmployeeDashboard = () => {
    const { data } = useGetTodosQuery()
    const [updateTodo, { isLoading }] = useUpdateTodoMutation()

    const handleUpdate = async (data: TOGGLE_TODO_REQUEST) => {
        try {
            await updateTodo(data).unwrap()
            toast.success("todo update success")
        } catch (error) {
            console.log(error)
            toast.error("unable to update todo")
        }
    }

    return <div className='container my-3'>
        {
            data && <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>employee</th>
                        <th>due</th>
                        <th>completeDate</th>
                        <th>complete</th>
                        <th>is Late</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr key={item._id} className={`${isBefore(item.completeDate || new Date(), item.due) ? "table-success" : "table-danger"}`}>
                            <td>{item._id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{item.employee.name}</td>
                            <td>{format(item.due, "dd-MMMM-yyyy hh:mm:ss a")}</td>
                            <td>{item.completeDate && format(item.completeDate, "dd-MMMM-yyyy hh:mm:ss a")}</td>
                            <td>
                                {
                                    item.complete
                                        ? "Completed"
                                        : <button onClick={e => handleUpdate({ _id: item._id, complete: true })} className='btn btn-success btn-sm'>Mark Complete</button>
                                }
                            </td>
                            <td>
                                {
                                    isBefore(item.completeDate || new Date(), item.due)
                                        ? "No"
                                        : "Yes"
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </div>
}

export default EmployeeDashboard
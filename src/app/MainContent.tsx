"use client";
import React, { useState } from 'react'; // FIX: Corrected "Reanpmct" to "React"

// Define a type for order data
interface Order {
    id: number;
    img: string;
    user: string;
    email: string;
    date: string;
    status: 'completed' | 'pending' | 'process';
}

// Define a type for todo data
interface Todo {
    id: number;
    text: string;
    progress: number;
    completed: boolean;
}

// Dummy data for orders
const initialOrders: Order[] = [
    { id: 1, img: 'img/people.png', user: 'Micheal John', email: 'micheal_john@mail.com', date: '18-10-2021', status: 'completed' },
    { id: 2, img: 'img/people.png', user: 'Ryan Doe', email: 'riyan_doe@mail.com', date: '01-06-2022', status: 'pending' },
    { id: 3, img: 'img/people.png', user: 'Tarry White', email: 'tarry_white@mail.com', date: '14-10-2021', status: 'process' },
    { id: 4, img: 'img/people.png', user: 'Salma', email: 'salma_doe@mail.com', date: '01-02-2023', status: 'pending' },
    { id: 5, img: 'img/people.png', user: 'Andreas Doe', email: 'anderas_doe@mail.com', date: '31-10-2021', status: 'completed' },
];
// Dummy data for todos
const initialTodos: Todo[] = [
    { id: 1, text: 'Check Inventory', progress: 100, completed: true },
    { id: 2, text: 'Manage Delivery Team', progress: 100, completed: true },
    { id: 3, text: 'Contact Salma: Confirm Delivery', progress: 45, completed: false },
    { id: 4, text: 'Update Shop Catalogue', progress: 67, completed: false },
    { id: 5, text: 'Count Profit Analytics', progress: 10, completed: false },
];


const MainContent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [todoFilter, setTodoFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const [orders] = useState<Order[]>(initialOrders);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterStatus(event.target.value);
    };
    
    const handleTodoFilterChange = (status: 'all' | 'completed' | 'pending') => {
        setTodoFilter(status);
    };

    const handleDeleteTodo = (todoId: number) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const handleToggleTodoComplete = (todoId: number) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed, progress: todo.completed ? 0 : 100 } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (todoFilter === 'all') return true;
        return todoFilter === 'completed' ? todo.completed : !todo.completed;
    });

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">Dashboard</a></li>
                        <li><i className='bx bx-chevron-right' ></i></li>
                        <li><a className="active" href="#">Home</a></li>
                    </ul>
                </div>
                <a href="#" className="btn-download">
                    <i className='bx bxs-cloud-download bx-fade-down-hover' ></i>
                    <span className="text">Download PDF</span>
                </a>
            </div>
            <ul className="box-info">
                <li>
                    <i className='bx bxs-calendar-check' ></i>
                    <span className="text"><h3>1020</h3><p>New Order</p></span>
                </li>
                <li>
                    <i className='bx bxs-group' ></i>
                    <span className="text"><h3>2834</h3><p>Visitors</p></span>
                </li>
                <li>
                    <i className='bx bxs-dollar-circle' ></i>
                    <span className="text"><h3>N$2543.00</h3><p>Total Sales</p></span>
                </li>
            </ul>
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Orders</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>İmg</th>
                                <th>User</th>
                                <th>Date Order</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders
                                .filter(order => filterStatus === 'all' || order.status === filterStatus)
                                .filter(order =>
                                    order.user.toLowerCase().includes(searchTerm.toLowerCase()) || order.email.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map(order => (
                                    <tr key={order.id}>
                                        <td><img src={order.img} alt="User Image" /></td>
                                        <td>
                                            <span>{order.user}</span>
                                            <p>{order.email}</p>
                                        </td>
                                        <td>{order.date}</td>
                                        <td><span className={`status ${order.status}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="todo">
                    <div className="head">
                        <h3>Todos</h3>
                        <i className='bx bx-plus icon'></i>
                    </div>
                    <ul className="todo-list">
                        {filteredTodos.map(todo => (
                            <li key={todo.id} className={`${todo.completed ? 'completed' : 'not-completed'}`}>
                                <p>{todo.text}</p>
                                <i className='bx bx-dots-vertical-rounded menu-icon'></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainContent;

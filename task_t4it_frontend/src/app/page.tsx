'use client';
import { useState } from 'react';

function UserForm() {
    const [created, setCreated] = useState(false);
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            if (!response.ok) {
                console.error('Failed to submit user data');
                setCreated(false);
                return;
            }
            setCreated(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setCreated(false);
        }
    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <button type="submit">Submit</button>
            {created && <p>User created</p>}
        </form>
    );
}

function UsersButton() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchUsers() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('http://localhost:3000/users');
            if (!res.ok) throw new Error('Failed to fetch users');
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setError('Błąd pobierania użytkowników');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ margin: '2rem' }}>
            <button
                onClick={fetchUsers}
                style={{
                    marginBottom: '1rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    background: '#222',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
            >
                Get Users
            </button>
            {loading && <div>Ładowanie...</div>}
            {error && <div>{error}</div>}
            {users.length > 0 && (
                <ul>
                    {users.map((user, idx) => (
                        <li key={idx}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Home() {
    return (
        <div className="form-bg">
            <UserForm />
            <UsersButton />
        </div>
    );
}

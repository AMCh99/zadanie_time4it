export default function Home() {
    async function submitUser(formData: FormData) {
        'use server';

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
                return;
            }

            const result = await response.json();
            console.log('Successfully submitted:', result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="form-bg">
            <form action={submitUser}>
                <div className="form-container">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

const SUPABASE_URL = 'https://yxfajitmasxbcohtbkqt.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZmFqaXRtYXN4YmNvaHRia3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODY4MTEsImV4cCI6MTk2Nzg2MjgxMX0.2L8306PS1qjxKhAvOhaxYHjp8eowvQquvK3yZw7Nyj8'
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getJuices() {
    const resp = await client.from('juices').select('*');
    console.log(resp);
    return resp.data;
}

export async function getJuiceById(id) {
    const resp = await client.from('juices').select('*').match({ id: id }).single();
    return resp.data;
}
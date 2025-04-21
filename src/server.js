const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors()); // разрешаем запросы с другого порта
app.use(express.json());

// Проверочный маршрут
app.get('/', (req, res) => {
  res.send('Сервер работает');
});

// Профиль пользователя
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Иван Иванов',
    bio: 'Люблю React и кофе ☕️'
  });
});

// Посты пользователя
app.get('/api/user/posts', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Мой первый пост',
      body: 'Привет, мир!',
      timestamp: Date.now()
    },
    {
      id: 2,
      title: 'React — сила!',
      body: 'JSX forever',
      timestamp: Date.now()
    }
  ]);
});

// Лента постов (например, общая для всех пользователей)
app.get('/api/feed', (req, res) => {
  res.json([
    {
      id: 101,
      title: 'Общий пост 1',
      body: 'Это пост в общей ленте',
      image: 'https://via.placeholder.com/150',
      timestamp: Date.now()
    },
    {
      id: 102,
      title: 'Общий пост 2',
      body: 'Еще один интересный пост',
      image: 'https://via.placeholder.com/150',
      timestamp: Date.now()
    }
  ]);
});


app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});

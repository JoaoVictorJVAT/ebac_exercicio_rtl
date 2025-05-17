import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://i.pinimg.com/736x/d4/ac/22/d4ac228b99c188e432c3c703622682c0.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;

import './App.css';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/antd.dark.css'; // Import the dark theme CSS

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <>{/* Your application components go here */}</>
        </ConfigProvider>
    );
}

export default App;

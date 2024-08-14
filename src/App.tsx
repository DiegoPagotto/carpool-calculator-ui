import React from 'react';
import { Button, ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const App: React.FC = () => (
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
            token: {
                colorPrimary: '#1DB954',
            },
        }}
    >
        <div>
            <Button type="primary">Primary Button</Button>
            <Button type="default" style={{ marginLeft: 8 }}>
                Default Button
            </Button>
        </div>
    </ConfigProvider>
);

export default App;

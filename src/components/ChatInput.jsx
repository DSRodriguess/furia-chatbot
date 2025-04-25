// src/components/ChatInput.jsx
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ChatInput = ({ input, setInput, handleSend }) => {
    return (
        <div className="chat-input">
            <InputText
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte algo sobre a FURIA..."
                className="p-inputtext-lg"
            />
            <Button icon="pi pi-send" onClick={handleSend} label="Enviar" className="p-button-sm" />
        </div>
    );
};

export default ChatInput;

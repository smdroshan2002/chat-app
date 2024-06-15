import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='af459c31-ec85-4d6b-8796-4ffb73edab74'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;
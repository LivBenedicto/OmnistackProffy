import React from 'react';

// icon
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// style
import './styles.css';
import api from '../../services/api';


export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProperties {
    teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProperties> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar}
                    alt={teacher.name}
                />

                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Price per Hour
                    <strong>${teacher.cost}</strong>
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={whatsappIcon} alt="WhatsApp" />
                        Get in touch
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
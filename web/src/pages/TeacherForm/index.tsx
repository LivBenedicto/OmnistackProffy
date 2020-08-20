import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

// style
import './styles.css'

// icon
import warningIcon from '../../assets/images/icons/warning.svg';


function TeacherForm() {
    const history = useHistory();

    // state [get(initial), set]
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBiography] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { weekday: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { weekday: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('classes', {
            name, avatar, whatsapp, bio, subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Successfully register!');

            // automatically sends the user to the landing page
            history.push('/');
        }).catch((err) => {
            console.log(err)
            alert('Error to register');
        })
    }

    // html page
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Amazing! You want to teach!"
                description="The first step is fill this application form"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your infos</legend>

                        <Input name="name" label="Full name" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(event) => { setAvatar(event.target.value) }} />
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(event) => { setWhatsapp(event.target.value) }} />

                        <Textarea name="biography" label="biography" value={bio} onChange={(event) => { setBiography(event.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>About classes</legend>

                        <Select
                            name="subject"
                            label="Subject"
                            value={subject} onChange={(event) => { setSubject(event.target.value) }}
                            options={[
                                { value: 'Sciences', label: 'Sciences' },
                                { value: 'Biology', label: 'Biology' },
                                { value: 'Arts', label: 'Arts' },
                                { value: 'PE', label: 'Physical Education' },
                                { value: 'Physics', label: 'Physics' },
                                { value: 'Geography', label: 'Geography' },
                                { value: 'Story', label: 'Story' },
                                { value: 'Mathematics', label: 'Mathematics' },
                                { value: 'Portuguese', label: 'Portuguese' },
                                { value: 'Chemistry', label: 'Chemistry' }
                            ]}
                        />

                        <Input name="cost" label="Price per Class" value={cost} onChange={(event) => { setCost(event.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available schedules
                        <button type="button" onClick={addNewScheduleItem}>+ New schedule</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.weekday} className="schedule-item">
                                    <Select
                                        name="weekday"
                                        label="Weekday"
                                        value={scheduleItem.weekday}
                                        onChange={event => setScheduleItemValue(index, 'weekday', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    />

                                    <Input name="from" label="From" type="time" value={scheduleItem.from} onChange={event => setScheduleItemValue(index, 'from', event.target.value)} />
                                    <Input name="to" label="To" type="time" value={scheduleItem.to} onChange={event => setScheduleItemValue(index, 'to', event.target.value)} />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning" />
                        Important! <br />
                        Fill all the datas
                    </p>

                        <button type="submit">Save register</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;
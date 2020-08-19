import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// style
import './styles.css'

// icon
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    // state [get(initial), set]
    const [scheduleItems, setScheduleItems] = useState([
        { weekday: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { weekday: 0, from: '', to: ''}
        ]);
    }

    // html page
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Amazing! You want to teach!"
                description="The first step is fill this application form"
            />

            <main>
                <fieldset>
                    <legend>Your infos</legend>

                    <Input name="name" label="Full name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />

                    <Textarea name="biography" label="biography" />
                </fieldset>

                <fieldset>
                    <legend>About classes</legend>

                    <Select
                        name="subject"
                        label="Subject"
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

                    <Input name="cost" label="Price per Class" />
                </fieldset>

                <fieldset>
                    <legend>
                        Available schedules
                        <button type="button" onClick={addNewScheduleItem}>+ New schedule</button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.weekday} className="schedule-item">
                                <Select
                                    name="weekday"
                                    label="Weekday"
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

                                <Input name="from" label="From" type="time" />
                                <Input name="to" label="To" type="time" />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning" />
                        Important! <br />
                        Fill all the datas
                    </p>

                    <button type="button">Save register</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;
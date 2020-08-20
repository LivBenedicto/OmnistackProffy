import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';

// style
import './styles.css'
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject, weekday, time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={(event) => { setSubject(event.target.value) }}
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

                    <Select
                        name="weekday"
                        label="Weekday"
                        value={weekday}
                        onChange={(event) => { setWeekday(event.target.value) }}
                        options={[
                            {value:'0', label: 'Sunday'},
                            {value:'1', label: 'Monday'},
                            {value:'2', label: 'Tuesday'},
                            {value:'3', label: 'Wednesday'},
                            {value:'4', label: 'Thursday'},
                            {value:'5', label: 'Friday'},
                            {value:'6', label: 'Saturday'}
                        ]}
                    />

                    <Input type="time" name="time" label="Time" value={time} onChange={(event) => { setTime(event.target.value) }} />

                    <button type="submit">Search</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })};
            </main>
        </div>
    );
}

export default TeacherList;
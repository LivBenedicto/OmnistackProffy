import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';

// style
import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers">
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

                    <Select
                        name="weekday"
                        label="Weekday"
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

                    <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
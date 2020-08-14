import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// style
import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subjects</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="weekday">Weekdays</label>
                        <input type="text" id="weekday" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
import React from 'react';
import expert1 from '../../../Picture/expert-1.jpg'
import expert2 from '../../../Picture/expert-2.jpg'
import expert3 from '../../../Picture/expert-3.jpg'
import expert4 from '../../../Picture/expert-4.jpg'
import expert5 from '../../../Picture/expert-5.jpg'
import expert6 from '../../../Picture/expert-6.png'
import Expert from '../Expert/Expert';

const Exparts = () => {
    const experts = [
        {
            'id': 1001,
            'name': "levanduski",
            'pic': expert1,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        },
        {
            'id': 1002,
            'name': "levanduski",
            'pic': expert2,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        },
        {
            'id': 1003,
            'name': "levanduski",
            'pic': expert3,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        },
        {
            'id': 1004,
            'name': "levanduski",
            'pic': expert4,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        },
        {
            'id': 1005,
            'name': "levanduski",
            'pic': expert5,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        },
        {
            'id': 1006,
            'name': "levanduski",
            'pic': expert6,
            "about": "levanduski a genius car specialist .he is all ready thousand of cars reaper . most important is all expensive cars maintain easily."

        }
    ]

    return (
        <div id='experts'>
            <h4 className='text-center fs-2'>Our Experts</h4>
            <div>
                <div className='container' >
                    <div className='row'>
                        {
                            experts.map(expert => <Expert
                                key={expert.id}
                                expert={expert}
                            ></Expert>)
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Exparts;
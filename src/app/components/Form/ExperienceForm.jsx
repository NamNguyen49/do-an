import React from 'react';
import { Form, Input, InputNumber, Typography, DatePicker, Button } from 'antd';
import RangePickerComponent from '../DatePicker/RangePickerComponent';
const { RangePicker } = DatePicker;

// const rangeConfig = {
//     rules: [
//       {
//         type: 'array',
//         message: 'Please select time!',
//       },
//     ],
//   };

const ExperienceForm = () => {
    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    return (
        <>
            <Form style={{}} form={form} layout="vertical" autoComplete="off">
                <Form.Item name="Role" label="WHAT WAS YOUR ROLE AT THE COMPANY?">
                    <Input style={{}} placeholder="Marketing Analyst" />
                </Form.Item>
                <Form.Item name="Company" label="FOR WHICH COMPANY DID YOU WORK?">
                    <Input style={{}} placeholder="Google" />
                </Form.Item>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>                    <div style={{ flex: 1 }}>
                    <Form.Item style={{ width: 300 }} name="range-picker" label="HOW LONG WERE YOU WITH THE COMPANY?" >
                        <RangePicker style={{}} />
                    </Form.Item>
                </div>
                    <div style={{ flex: 1 }}>
                        <Form.Item name="Located" label="WHERE WAS THE COMPANY LOCATED?">
                            <Input style={{}} placeholder="NewYork, NY" />
                        </Form.Item>
                    </div>
                </div>

                <Form.Item name="WhatDo" label="WHAT DID YOU DO AT THE COMPANY?">
                    <Input style={{
                        height: 200
                    }} placeholder="• Orgi..." />
                </Form.Item>
                <Button type="primary" >
                    SAVE TO EXPERIENCE LIST
                </Button>
            </Form>

        </>
    );
};
export default ExperienceForm;
import React from 'react';
import { Form, Input, InputNumber, Typography, Button } from 'antd';




const EducationForm = () => {
    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    return (
        <>
            <Form style={{}} form={form} layout="vertical" autoComplete="off">
                <Form.Item name="Role" label="WHAT IS YOUR DEGREE OR OTHER QUALIFICATION AND MAJOR?">
                    <Input style={{}} placeholder="Sortware Engineer" />
                </Form.Item>
                <Form.Item name="Company" label="WHERE DID YOU EARN YOUR SORTWARE ENGINEER?">
                    <Input style={{}} placeholder="FPT University" />
                </Form.Item>
                <Form.Item label="WHAT IS FPT UNIVERSITY LOCATED?">
                    <Input style={{}} placeholder="Madison" />
                </Form.Item>
                <Form.Item label="WHEN DID YOU EARN YOUR SORTWARE ENGINEER?">
                    <Input style={{}} placeholder="2023" />
                </Form.Item>
                <Form.Item label="DID YOU MINOR IN ANYTHING?">
                    <Input style={{}} placeholder="AI" />
                </Form.Item>
                <Form.Item label="WHERE DID YOU EARN YOUR SORTWARE ENGINEER?">
                    <Input style={{}} placeholder="FPT University" />
                </Form.Item>
                <Form.Item label="GPA(IF APPLOCABLE)?">
                    <Input style={{}} placeholder="3.82 GPA" />
                </Form.Item>




                <Button className="form-button w-full" style={{ backgroundColor: 'rgb(77, 112, 235)', color: 'white' }} >
                    SAVE TO EDUCATION LIST
                </Button>
            </Form>

        </>
    );
};
export default EducationForm;
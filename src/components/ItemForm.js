import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ItemForm.module.css';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_Name] = useState('');
    const [middle_name, setMiddle_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [contact_no, setContact_no] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [gender, setGender] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_address, setResidential_Address] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [permanent_address, setPermanent_Address] = useState('');
    const [civil_status, setCivil_Status] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBlood_Type] = useState('');
    const [mother_firstname, setMother_Firstname] = useState('');
    const [mother_middlename, setMother_Middlename] = useState('');
    const [mother_lastname, setMother_Lastname] = useState('');
    const [mother_occupation, setMother_Occupation] = useState('');
    const [mother_no, setMother_No] = useState('');
    const [father_firstname, setFather_Firstname] = useState('');
    const [father_middlename, setFather_Middlename] = useState('');
    const [father_lastname, setFather_Lastname] = useState('');
    const [father_occupation, setFather_Occupation] = useState('');
    const [father_no, setFather_No] = useState('');
    const [sibling1, setSibling1] = useState('');
    const [sibling2, setSibling2] = useState('');
    const [sibling3, setSibling3] = useState('');

    useEffect(() => {
        if (item) {
            setFirst_Name(item.first_name);
            setMiddle_Name(item.middle_name);
            setLast_Name(item.last_name);
            setContact_no(item.contact_no);
            setEmail(item.email);
            setAddress(item.address);
            setBirthday(item.birthday);
            setBirthplace(item.birthplace);
            setGender(item.gender);
            setCitizenship(item.citizenship);
            setResidential_Address(item.residential_address);
            setZipcode(item.zipcode);
            setPermanent_Address(item.permanent_address);
            setCivil_Status(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBlood_Type(item.blood_type);
            setMother_Firstname(item.mother_firstname);
            setMother_Middlename(item.mother_middlename);
            setMother_Lastname(item.mother_lastname);
            setMother_Occupation(item.mother_occupation);
            setMother_No(item.mother_no);
            setFather_Firstname(item.father_firstname);
            setFather_Middlename(item.father_middlename);
            setFather_Lastname(item.father_lastname);
            setFather_Occupation(item.father_occupation);
            setFather_No(item.father_no);
            setSibling1(item.sibling1);
            setSibling2(item.sibling2);
            setSibling3(item.sibling3);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name, middle_name, last_name, contact_no, email, address, birthday, birthplace, gender,
            citizenship, residential_address, zipcode, permanent_address, civil_status, height, weight, blood_type,
            mother_firstname, mother_middlename, mother_lastname, mother_occupation, mother_no,
            father_firstname, father_middlename, father_lastname, father_occupation, father_no, sibling1, sibling2, sibling3
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
            resetForm();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const resetForm = () => {
        setFirst_Name('');
        setMiddle_Name('');
        setLast_Name('');
        setContact_no('');
        setEmail('');
        setAddress('');
        setBirthday('');
        setBirthplace('');
        setGender('');
        setCitizenship('');
        setResidential_Address('');
        setZipcode('');
        setPermanent_Address('');
        setCivil_Status('');
        setHeight('');
        setWeight('');
        setBlood_Type('');
        setMother_Firstname('');
        setMother_Middlename('');
        setMother_Lastname('');
        setMother_Occupation('');
        setMother_No('');
        setFather_Firstname('');
        setFather_Middlename('');
        setFather_Lastname('');
        setFather_Occupation('');
        setFather_No('');
        setSibling1('');
        setSibling2('');
        setSibling3('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_Name(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Contact Number:</label>
                <input type='text' value={contact_no} onChange={(e) => setContact_no(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Address:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Birthday:</label>
                <input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Birthplace:</label>
                <input type='text' value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Gender:</label>
                <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Residential Address:</label>
                <input type='text' value={residential_address} onChange={(e) => setResidential_Address(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Zipcode:</label>
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Permanent Address:</label>
                <input type='text' value={permanent_address} onChange={(e) => setPermanent_Address(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_Status(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Height in cm:</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Weight in kg:</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBlood_Type(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Mother's First Name:</label>
                <input type='text' value={mother_firstname} onChange={(e) => setMother_Firstname(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Mother's Middle Name:</label>
                <input type='text' value={mother_middlename} onChange={(e) => setMother_Middlename(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Mother's Last Name:</label>
                <input type='text' value={mother_lastname} onChange={(e) => setMother_Lastname(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Mother's Occupation:</label>
                <input type='text' value={mother_occupation} onChange={(e) => setMother_Occupation(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Mother's Contact No.:</label>
                <input type='text' value={mother_no} onChange={(e) => setMother_No(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Father's First Name:</label>
                <input type='text' value={father_firstname} onChange={(e) => setFather_Firstname(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Father's Middle Name:</label>
                <input type='text' value={father_middlename} onChange={(e) => setFather_Middlename(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Father's Last Name:</label>
                <input type='text' value={father_lastname} onChange={(e) => setFather_Lastname(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Father's Occupation:</label>
                <input type='text' value={father_occupation} onChange={(e) => setFather_Occupation(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Father's Contact No.:</label>
                <input type='text' value={father_no} onChange={(e) => setFather_No(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Sibling 1:</label>
                <input type='text' value={sibling1} onChange={(e) => setSibling1(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Sibling 2:</label>
                <input type='text' value={sibling2} onChange={(e) => setSibling2(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label>Sibling 3:</label>
                <input type='text' value={sibling3} onChange={(e) => setSibling3(e.target.value)} />
            </div>
            <div className={styles.buttonGroup}>
                <button type='submit' className='submit'>Submit</button>
            </div>
        </form>
    );
};

export default ItemForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ItemList.module.css';  

const ItemList = ({ onEdit }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${id}/`);
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Personal Information</h1>
            <ul>
                {items.map(item => (
                    <div key={item.id} className={styles.item}>
                        <p><strong>First Name:</strong> {item.first_name}</p>
                        <p><strong>Middle Name:</strong> {item.middle_name}</p>
                        <p><strong>Last Name:</strong> {item.last_name}</p>
                        <p><strong>Contact Number:</strong> {item.contact_no}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Address:</strong> {item.address}</p>
                        <p><strong>Birthday:</strong> {item.birthday}</p>
                        <p><strong>Birthplace:</strong> {item.birthplace}</p>
                        <p><strong>Gender:</strong> {item.gender}</p>
                        <p><strong>Citizenship:</strong> {item.citizenship}</p>
                        <p><strong>Residential Address:</strong> {item.residential_address}</p>
                        <p><strong>Zipcode:</strong> {item.zipcode}</p>
                        <p><strong>Permanent Address:</strong> {item.permanent_address}</p>
                        <p><strong>Civil Status:</strong> {item.civil_status}</p>
                        <p><strong>Height in cm:</strong> {item.height}</p>
                        <p><strong>Weight in kg:</strong> {item.weight}</p>
                        <p><strong>Blood Type:</strong> {item.blood_type}</p>
                        <p><strong>Mother's FirstName:</strong> {item.mother_firstname}</p>
                        <p><strong>Mother's MiddleName:</strong> {item.mother_middlename}</p>
                        <p><strong>Mother's LastName:</strong> {item.mother_lastname}</p>
                        <p><strong>Mother's Occupation:</strong> {item.mother_occupation}</p>
                        <p><strong>Mother's No:</strong> {item.mother_no}</p>
                        <p><strong>Father's FirstName:</strong> {item.father_firstname}</p>
                        <p><strong>Father's MiddleName:</strong> {item.father_middlename}</p>
                        <p><strong>Father's LastName:</strong> {item.father_lastname}</p>
                        <p><strong>Father's Occupation:</strong> {item.father_occupation}</p>
                        <p><strong>Father's No:</strong> {item.father_no}</p>
                        <p><strong>First Sibling Name:</strong> {item.sibling1}</p>
                        <p><strong>Second Sibling Name:</strong> {item.sibling2}</p>
                        <p><strong>Third Sibling Name:</strong> {item.sibling3}</p>


                        <div className={styles.buttons1}>
                            <button className="edit" onClick={() => onEdit(item)}>Edit</button>
                        </div>
                        
                        <div className={styles.buttons2}>
                            <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

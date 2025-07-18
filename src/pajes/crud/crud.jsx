import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from 'antd';
import TextField from '@mui/material/TextField';

export default function Crud() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    let [inpAddName, setInpAddName] = useState("")
    let [inpAddAge, setInpAddAge] = useState("")
    let [inpAddAvatar, setInpAddAvatar] = useState("")
    let [inpAddDes, setInpAddDes] = useState("")
    let [inpAddGroup, setInpAddGroup] = useState("")
    let [inpAddSum, setInpAddSum] = useState("")
    let [search, setSearch] = useState("")


    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("ru-RU", options);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    let API = "https://685a9abb9f6ef96111571888.mockapi.io/Frontent"

    let [data, setData] = useState([])
    async function get() {
        try {
            let { data } = await axios.get(API)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        get()
    }, [])



    async function deleteUser(id) {
        try {
            await axios.delete(`${API}/${id}`)
            get()
        } catch (error) {
            console.log(error);
        }
    }


    async function addNewUser() {
        let newUser = {
            name: inpAddName,
            avatar: inpAddAvatar,
            des: inpAddDes,
            group: inpAddGroup,
            age: inpAddAge,
            sumOplat: inpAddSum,
            id: Date.now(),
        }
        try {
            await axios.post(API, newUser)
            get()
            setIsModalOpen(false)
        } catch (error) {
            console.log(error);
        }


    }



    const filteredData = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())

    );



    return (<>
        <div className="flex w-[90%] m-auto justify-between">
            <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button type="primary" onClick={showModal}>   Open Modal   </Button>
        </div>
        <Modal
            title="Add New User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={addNewUser}
            onCancel={handleCancel}
        >

            <div className="flex flex-wrap gap-[20px]">

            <TextField id="outlined-basic" label="AddName" variant="outlined" value={inpAddName} onChange={(e) => setInpAddName(e.target.value)} />
            {/* <input type="text" value={inpAddName} onChange={(e) => setInpAddName(e.target.value)} /> */}
            <TextField id="outlined-basic" label="AddAvatar" variant="outlined" value={inpAddAvatar} onChange={(e) => setInpAddAvatar(e.target.value)} />
            {/* <input type="text" value={inpAddAvatar} onChange={(e) => setInpAddAvatar(e.target.value)} /> */}
            <TextField id="outlined-basic" label="AddDes" variant="outlined" value={inpAddDes} onChange={(e) => setInpAddDes(e.target.value)} />
            {/* <input type="text" value={inpAddDes} onChange={(e) => setInpAddDes(e.target.value)} /> */}
            <TextField id="outlined-basic" label="AddSum" variant="outlined" value={inpAddSum} onChange={(e) => setInpAddSum(e.target.value)} />
            {/* <input type="text" value={inpAddSum} onChange={(e) => setInpAddSum(e.target.value)} /> */}
            <TextField id="outlined-basic" label="AddAge" variant="outlined" value={inpAddAge} onChange={(e) => setInpAddAge(e.target.value)} />
            {/* <input type="text" value={inpAddAge} onChange={(e) => setInpAddAge(e.target.value)} /> */}
            <TextField id="outlined-basic" label="AddGroup" variant="outlined" value={inpAddGroup} onChange={(e) => setInpAddGroup(e.target.value)} />
            {/* <input type="text" value={inpAddGroup} onChange={(e) => setInpAddGroup(e.target.value)} /> */}
            </div>
            
        </Modal>

        <table className=" bg-white w-[96%] mt-[100px] m-auto shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 text-left">
                <tr>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Group</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">Date of Payment</th>
                    <th className="px-4 py-3">Amount</th>

                    <th className="px-4 py-3">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {filteredData.map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-[40px] h-[40px] rounded-full object-cover"
                                    src={e.avatar}
                                    alt={e.name}
                                />
                                <div>
                                    <h1 className="font-medium">{e.name}</h1>
                                    <p className="text-sm text-gray-500">{e.des}</p>
                                </div>
                            </div>
                        </td>
                        <td>{e.group}</td>
                        <td className="px-4 py-3 ">{e.status == true ? "Active" : "Inactive"}</td>
                        <td className="px-4 py-3">{formattedDate}</td>
                        <td className="px-4 py-3 font-semibold text-green-600">{e.sumOplat}$</td>
                        <td className="px-4 py-3">
                            <div className="flex gap-2">
                                <button onClick={() => deleteUser(e.id)} className="bg-red-100 text-red-500 px-2 py-1 rounded hover:bg-red-200" title="Delete">🗑️</button>
                                <button className="bg-blue-100 text-blue-500 px-2 py-1 rounded hover:bg-blue-200" title="Edit">🖊️</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>



    </>)
}
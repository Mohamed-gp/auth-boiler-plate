"use client";
import axios from "axios";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toDoSliceActions } from "../../redux/slices/toDoSlice";

const UserToDos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const todos = useSelector((state) => state.toDo.toDos);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const submitHandler = async (e: Event) => {
    e.preventDefault();
    if (title.trim() == "") {
      return toast.error("title musn't be empty");
    }
    if (description.trim() == "") {
      return toast.error("description musn't be empty");
    }
    const dataToSubmit = {
      title: title,
      description: description,
      user: id,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:8080/todos/${id}`,
        dataToSubmit
      );
      dispatch(toDoSliceActions.addToDo(data.data));
      console.log(data);
    } catch (error) {
      console.log(error.response.message);
      toast.error(error.response.message);
    }
  };
  // remove todo by id
  const removeHandler = async (e: Event, id) => {
    e.preventDefault();
    try {
      console.log(id);
      const { data } = await axios.delete(`http://localhost:8080/todos/${id}`);
      dispatch(toDoSliceActions.removeTodo(id));
      console.log(data);
    } catch (error) {
      console.log(error.response.message);
      toast.error(error.response.message);
    }
  };
  return (
    <div className="container my-6">
      {todos?.map((element) => (
        <>
          <div className="relative px-6 py-4 my-6 bg-orange-400 rounded-xl">
            <p className="font-bold text-center ">{element.title}</p>
            <p>{element.description}</p>
            <p className="font-bold text-right">
              {new Date().getFullYear()}/{new Date().getMonth()}/
              {new Date().getDay()}
            </p>
            <span
              onClick={(e) => removeHandler(e, element.id)}
              className="absolute flex items-center justify-center w-6 h-6 text-white bg-red-600 rounded-full cursor-pointer -top-3 -right-3"
            >
              <FaXmark />
            </span>
          </div>
        </>
      ))}
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col my-6 mx-auto w-[400px] px-8 py-5 bg-mainColor rounded-3xl"
      >
        <p className="my-2 font-bold text-center text-white title">
          Create To-Do
        </p>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="To-Do Title"
          className="py-2 pl-3 my-2 rounded-lg focus:outline-none"
        />
        <input
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          type="text"
          placeholder="To-Do Description"
          className="py-2 pl-3 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="submit"
          value="Create To-Do"
          className="px-3 py-2 mx-auto my-2 text-white bg-orange-400 rounded-lg w-fit"
        />
      </form>
    </div>
  );
};
export default UserToDos;

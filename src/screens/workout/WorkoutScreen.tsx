import { Link } from "react-router";

export default function WorkoutScreen() {
  return (
    <>
      <h1 className="head">Home</h1>
      <p>Workout</p>
      <Link to="/">Back home</Link>
    </>
  );
}

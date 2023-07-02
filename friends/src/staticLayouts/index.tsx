import { useEffect } from "react";
import { supabase } from "../client";
import styles from "./staticLayouts.module.css";

export interface Todo {
  id: number;
  title: string;
  content: string;
}
function StaticLayouts() {
  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    const { data, error } = await supabase.from("todolist").select("*");
    console.log("todo:", data, error);
  }
  return (
    <div className={styles.staticLayouts}>
      <header className="App-header">
        <section>
          <h1>COMING SOON...</h1>
        </section>
      </header>
    </div>
  );
}

export default StaticLayouts;

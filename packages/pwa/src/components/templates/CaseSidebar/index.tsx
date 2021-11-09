import Link from "next/link";

// TODO: autogenerate based off markdown headers
const CaseSidebar = ({
  outline,
}: React.ComponentProps<any>): React.ReactElement => (
  <aside>
    <ul>
      <li>
        <Link href={"#Challenge"}>Challenge</Link>
        <ul>
          <li>
            <Link href={"#Situation"}>Situation</Link>
          </li>
          <li>
            <Link href={"#Task"}>Task</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={"#Solution"}>Solution</Link>
        <ul>
          <li>
            <Link href={"#Approach"}>Approach</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={"#Results"}>Results</Link>
      </li>
    </ul>
  </aside>
);

export default CaseSidebar;

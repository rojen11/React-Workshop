import PageLayout from "../../components/Layout/PageLayout";
import Tasks from "../../components/Tasks";

export default function All(props) {
  return (
    <PageLayout title="All">
      <div>
        <Tasks {...props} section="Pending" />
      </div>
      <div className="mt-10">
        <Tasks {...props} section="Completed" />
      </div>
    </PageLayout>
  );
}

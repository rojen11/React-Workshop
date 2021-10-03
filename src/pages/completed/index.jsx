import PageLayout from "../../components/Layout/PageLayout";
import Tasks from "../../components/Tasks";

export default function Completed(props) {
  return (
    <PageLayout title="Completed">
        <Tasks {...props} section="Completed" />
    </PageLayout>
  );
}

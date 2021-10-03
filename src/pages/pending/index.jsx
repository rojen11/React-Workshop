import PageLayout from "../../components/Layout/PageLayout";
import Tasks from "../../components/Tasks";

export default function Pending(props) {
  return (
    <PageLayout title="Pending">
      <Tasks {...props} section="Pending" />
    </PageLayout>
  );
}

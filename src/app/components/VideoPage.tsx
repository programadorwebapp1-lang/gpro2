import { useNavigate } from "react-router-dom";
import { VideosSection } from "./VideosSection";

export function VideoPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">

            <VideosSection />
        </div>
    );
}

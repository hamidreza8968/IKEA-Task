import { PaginationProps } from '../../interfaces/IPagination.ts';
import './Pagination.css';
import LeftArrow from '../icons/LeftArrow/LeftArrow.tsx';
import RightArrow from '../icons/RightArrow/RightArrow.tsx';
import Button from "../ui/Button/Button.tsx";

const Pagination = ({
                                                   currentPage,
                                                   totalPages,
                                                   onPageChange,
                                               } : PaginationProps) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination">
            <Button onClick={handlePrev} disabled={currentPage === 1}>
                <LeftArrow size={18} style={{ marginRight: 8 }} /> Prev
            </Button>
            <span>
        {currentPage} / {totalPages}
      </span>
            <Button onClick={handleNext} disabled={currentPage === totalPages}>
                Next <RightArrow size={18} style={{ marginLeft: 8 }} />
            </Button>
        </div>
    );
};

export default Pagination;

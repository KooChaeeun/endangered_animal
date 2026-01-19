import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import SubBanner from '../components/layout/SubBanner';
import ReportForm from '../components/report/ReportForm';
import ReportList from '../components/report/ReportList';

const Report = () => {
    const [reports, setReports] = useState([]);

    // 추가
    const addReport = (newReport) => {
        setReports([newReport, ...reports]);
    };
    //   삭제
    const deleteReports = (selectedIds) => {
        setReports(reports.filter((item) => !selectedIds.includes(item.id)));
    };
    const sub = {
        title: '제보하기',
        img: '/images/sub2_bg.jpg',
    };
    return (
        <>
            <SubBanner title={sub.title} imageUrl={sub.img} />
            <Container sx={{ py: 20, maxWidth: '1440px !important' }}>
                {/* 제보 입력 섹션 */}
                <Box sx={{ display: 'flex', gap: 10, mb: 15 }}>
                    <Box sx={{ flex: 1.5 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            멸종위기 야생동물을 발견하셨나요?
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            시민 여러분들의 소중한 제보는 멸종위기 야생동물 전국분포조사의
                            기초자료로 활용 및 신규 서식지 발굴에 사용됩니다.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1.5 }}>
                        <ReportForm onAdd={addReport} />
                    </Box>
                </Box>

                {/* 나의 제보 목록 섹션 */}
                <Box sx={{ pt: '30px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
                        나의 제보
                    </Typography>
                    <ReportList items={reports} onDelete={deleteReports} />
                </Box>
            </Container>
        </>
    );
};

export default Report;

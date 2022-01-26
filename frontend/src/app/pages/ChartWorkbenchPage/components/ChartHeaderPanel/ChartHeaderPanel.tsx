/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Button, Space } from 'antd';
import useI18NPrefix from 'app/hooks/useI18NPrefix';
import { FC, memo } from 'react';
import styled from 'styled-components/macro';
import {
  FONT_SIZE_ICON_SM,
  FONT_WEIGHT_MEDIUM,
  LINE_HEIGHT_ICON_SM,
  SPACE_MD,
  SPACE_SM,
  SPACE_TIMES,
  SPACE_XS,
} from 'styles/StyleConstants';

const ChartHeaderPanel: FC<{
  chartName?: string;
  onSaveChart?: () => void;
  onGoBack?: () => void;
}> = memo(({ chartName, onSaveChart, onGoBack }) => {
  const t = useI18NPrefix(`viz.workbench.header`);

  return (
    <Wrapper>
      <h1>{chartName}</h1>
      <Space>
        <Button type="primary" ghost onClick={onGoBack}>
          取消
        </Button>
        <Button type="primary" onClick={onSaveChart}>
          {t('save')}
        </Button>
        <Button type="primary">保存到仪表板</Button>
        {/* <Dropdown key="more" trigger={['click']} overlay={getOverlays()}>
          <Button icon={<MoreOutlined />} />
        </Dropdown> */}
      </Space>
    </Wrapper>
  );
});

export default ChartHeaderPanel;

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: ${SPACE_SM} ${SPACE_MD} ${SPACE_SM} ${SPACE_SM};
  border-bottom: 1px solid ${p => p.theme.borderColorSplit};

  h1 {
    flex: 1;
    padding: 0 ${SPACE_XS};
    font-size: ${FONT_SIZE_ICON_SM};
    font-weight: ${FONT_WEIGHT_MEDIUM};
    line-height: ${LINE_HEIGHT_ICON_SM};
  }
`;

const GoBack = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${SPACE_TIMES(8)};
  height: ${SPACE_TIMES(8)};
  font-size: ${FONT_SIZE_ICON_SM};
  color: ${p => p.theme.textColorLight};

  &:hover {
    color: ${p => p.theme.textColorSnd};
  }
`;

import React from 'react';
import PropTypes from 'prop-types';

import { AiOutlineDollar } from 'react-icons/ai';
import { LuUsers } from 'react-icons/lu';
import { CiCreditCard1 } from 'react-icons/ci';
import { MdOutlineShowChart } from 'react-icons/md';

import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

type ContentCardProps = {
  title: string;
  description?: string;
  content: string;
  note: string;
  icon: React.ReactNode;
};

function ContentCard({
  title,
  content,
  note,
  description,
  icon,
}: ContentCardProps) {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{content}</p>
        <p className="text-sm text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}

function InsightSection() {
  return (
    <section className="flex flex-row flex-wrap items-stretch justify-start gap-5">
      <ContentCard
        title="Title 1"
        content="$45,231.89"
        note="+20% growth"
        icon={<AiOutlineDollar className="text-xl" />}
      />
      <ContentCard
        title="Title 2"
        content="+2350"
        note="-10% growth"
        icon={<LuUsers className="text-xl" />}
      />
      <ContentCard
        title="Title 3"
        content="+12,234"
        note="+200% get new subcribers"
        icon={<CiCreditCard1 className="text-xl" />}
      />
      <ContentCard
        title="Title 4"
        content="+12,234"
        note="+200% get new subcribers"
        icon={<MdOutlineShowChart className="text-xl" />}
      />
    </section>
  );
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

ContentCard.defaultProps = {
  description: '',
};

export default InsightSection;

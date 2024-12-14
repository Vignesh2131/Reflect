import React from 'react'
import { faq } from '@/data/faq';
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from '../ui/accordion';
const FaqAccordion = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-bold text-center text-orange-900 mb-12'>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className='w-full mx-auto'>
              {faq.map((faq,index) => {
                  return (
                      <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-orange-900 text-lg">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-orange-700">
                       {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
              })}
      </Accordion>
    </div>
  );
}

export default FaqAccordion
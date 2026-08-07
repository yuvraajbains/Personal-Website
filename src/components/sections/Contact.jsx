import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import Reveal from '../Reveal';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const inputClasses =
    "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors";

const Contact = () => {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('idle'); // idle | loading | success | error

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus('loading');
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                { from_name: form.name, reply_to: form.email, message: form.message },
                { publicKey: PUBLIC_KEY }
            );
            setStatus('success');
            toast.success("Message sent — I'll get back to you soon.");
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 2500);
        } catch (err) {
            setStatus('error');
            toast.error("Something went wrong — try emailing me directly instead.");
            setTimeout(() => setStatus('idle'), 2500);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-0 max-w-4xl mx-auto">
            <Reveal className="space-y-2 mb-10">
                <p className="text-spark font-mono text-sm">{'// section.contact'}</p>
                <h2 className="font-display text-4xl font-bold text-foreground">Get In <span className="text-signal text-glow-signal">Touch</span></h2>
            </Reveal>

            <Reveal delay={0.05}>
                <p className="font-display text-2xl sm:text-3xl font-semibold leading-snug max-w-2xl text-foreground mb-10">
                    Always training on the next problem —
                    <span className="text-signal"> let's build</span> something worth shipping.
                </p>
            </Reveal>

            <Reveal delay={0.1}>
                <form onSubmit={onSubmit} className="terminal-card p-6 md:p-8 space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                value={form.name}
                                onChange={onChange}
                                disabled={status === 'loading'}
                                placeholder="Ada Lovelace"
                                className={inputClasses}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={form.email}
                                onChange={onChange}
                                disabled={status === 'loading'}
                                placeholder="you@example.com"
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                            Message
                        </label>
                        <Textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={onChange}
                            disabled={status === 'loading'}
                            placeholder="What are we building?"
                            className="focus-visible:ring-signal resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        data-state={status}
                        className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-signal px-6 font-mono text-sm font-medium text-primary-foreground transition-all duration-200 ease-out hover:bg-signal/90 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 data-[state=error]:bg-destructive data-[state=success]:bg-signal"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                                Sending…
                            </>
                        ) : status === 'success' ? (
                            'Sent ✓'
                        ) : status === 'error' ? (
                            'Try again'
                        ) : (
                            <>
                                <Send size={16} aria-hidden="true" />
                                Send message
                            </>
                        )}
                    </button>
                </form>
            </Reveal>
        </section>
    );
};

export default Contact;
